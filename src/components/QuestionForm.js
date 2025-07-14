import React, { useState, useRef, useEffect } from 'react'; 
import { IconButton } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import TitleIcon from '@mui/icons-material/Title';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubjectIcon from '@mui/icons-material/Subject';

import './QuestionForm.css';

function Question_form() {
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('Multiple choice');
  const [options, setOptions] = useState(['Option 1']);
  const [required, setRequired] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: Date.now(),
      questionText: '',
      questionType: 'Multiple choice',
      options: ['Option 1'],
      required: false
    }
  ]);

  const [selectedQuestionId, setSelectedQuestionId] = useState(questions[0].id);
  const questionRefs = useRef({});
  const sidebarRef = useRef(null);

  const [draggedQuestionId, setDraggedQuestionId] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (e, questionId) => {
    setDraggedQuestionId(questionId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', questionId);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedQuestionId) {
      const draggedIndex = questions.findIndex(q => q.id === draggedQuestionId);
      if (draggedIndex !== dropIndex) {
        const newQuestions = [...questions];
        const [draggedQuestion] = newQuestions.splice(draggedIndex, 1);
        newQuestions.splice(dropIndex, 0, draggedQuestion);
        setQuestions(newQuestions);
      }
    }
    setDraggedQuestionId(null);
    setDragOverIndex(null);
  };

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      questionText: '',
      questionType: 'Multiple choice',
      options: ['Option 1'],
      required: false
    };
    setQuestions([...questions, newQuestion]);
    setSelectedQuestionId(newQuestion.id); 
    setQuestionText('');
    setQuestionType('Multiple choice');
    setOptions(['Option 1']);
    setRequired(false);
  };

  const addOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    if (options.length > 1) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const deleteQuestion = (id) => {
    if (questions.length === 1) return; 
    const updated = questions.filter((q) => q.id !== id);
    setQuestions(updated);

    if (selectedQuestionId === id && updated.length > 0) {
      const index = questions.findIndex((q) => q.id === id);
      const next = questions[index + 1] || questions[index - 1] || updated[0];
      setSelectedQuestionId(next?.id);

      setTimeout(() => {
        if (questionRefs.current[next?.id] && sidebarRef.current) {
          const questionEl = questionRefs.current[next?.id];
          const rect = questionEl.getBoundingClientRect();
          sidebarRef.current.style.top = `${rect.top + window.scrollY}px`;
        }
      }, 100);
    }
  };

  useEffect(() => {
    const selected = questions.find(q => q.id === selectedQuestionId);
    if (selected) {
      setQuestionText(selected.questionText);
      setQuestionType(selected.questionType);
      setOptions(selected.options);
      setRequired(selected.required);
    }
  }, [selectedQuestionId, questions]);

  useEffect(() => {
    if (selectedQuestionId && questionRefs.current[selectedQuestionId] && sidebarRef.current) {
      setTimeout(() => {
        const questionEl = questionRefs.current[selectedQuestionId];
        if (questionEl) {
          const rect = questionEl.getBoundingClientRect();
          sidebarRef.current.style.top = `${rect.top + window.scrollY}px`;
        }
      }, 10);
    }
  }, [selectedQuestionId, questions]);

  return (
    <div className="question_form_container">
      <div className="question_form">
        <div className="section">
          <div className="question_form_top">
            <input
              type="text"
              className="question_form_top_name"
              placeholder="Untitled form"
            />
            <input
              type="text"
              className="question_form_top_desc"
              placeholder="Form description"
            />
          </div>
        </div>

        {questions.map((q, index) => (
          <div
            className={`section ${dragOverIndex === index ? 'drag-over' : ''}`}
            key={q.id}
            ref={(el) => (questionRefs.current[q.id] = el)} 
            onClick={() => setSelectedQuestionId(q.id)}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, q.id)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={() => {
              setDraggedQuestionId(null);
              setDragOverIndex(null);
            }}
          >
            <div
              className={`question_form_question ${
                selectedQuestionId === q.id ? 'active' : ''
              }`}
            >
              <div className="question_form_header">
                <div className="question_form_header_left">
                  <div className="drag-handle">⋮⋮</div>
                  <input
                    type="text"
                    className="question_form_input"
                    placeholder="Question"
                    value={selectedQuestionId === q.id ? questionText : q.questionText}
                    onChange={(e) => {
                      if (selectedQuestionId === q.id) {
                        setQuestionText(e.target.value);
                        const updatedQuestions = questions.map(question =>
                          question.id === q.id 
                            ? { ...question, questionText: e.target.value }
                            : question
                        );
                        setQuestions(updatedQuestions);
                      }
                    }}
                  />
                </div>
                <div className="question_form_header_right">
                  <IconButton><ImageIcon /></IconButton>
                  <select
                    className="question_form_select"
                    value={selectedQuestionId === q.id ? questionType : q.questionType}
                    onChange={(e) => {
                      if (selectedQuestionId === q.id) {
                        setQuestionType(e.target.value);
                        const updatedQuestions = questions.map(question =>
                          question.id === q.id 
                            ? { ...question, questionType: e.target.value }
                            : question
                        );
                        setQuestions(updatedQuestions);
                      }
                    }}
                  >
                    <option value="Multiple choice">Multiple choice</option>
                    <option value="Checkboxes">Checkboxes</option>
                    <option value="Dropdown">Dropdown</option>
                    <option value="Short answer">Short answer</option>
                    <option value="Paragraph">Paragraph</option>
                    <option value="File upload">File upload</option>
                    <option value="Linear scale">Linear scale</option>
                    <option value="Date">Date</option>
                    <option value="Time">Time</option>
                  </select>
                </div>
              </div>

              <div className="question_form_formatting">
                <IconButton size="small"><FormatBoldIcon /></IconButton>
                <IconButton size="small"><FormatItalicIcon /></IconButton>
                <IconButton size="small"><FormatUnderlinedIcon /></IconButton>
                <IconButton size="small"><LinkIcon /></IconButton>
              </div>

              <div className="question_form_options">
                {(selectedQuestionId === q.id ? options : q.options).map((option, optionIndex) => (
                  <div key={optionIndex} className="question_form_option">
                    <div className="option_indicator">
                      <span className="radio_circle"></span>
                    </div>
                    <input
                      type="text"
                      className="option_input"
                      value={option}
                      onChange={(e) => {
                        if (selectedQuestionId === q.id) {
                          updateOption(optionIndex, e.target.value);
                          const updatedQuestions = questions.map(question =>
                            question.id === q.id 
                              ? { 
                                  ...question, 
                                  options: options.map((opt, idx) =>
                                    idx === optionIndex ? e.target.value : opt
                                  ) 
                                }
                              : question
                          );
                          setQuestions(updatedQuestions);
                        }
                      }}
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                    {(selectedQuestionId === q.id ? options : q.options).length > 1 && (
                      <IconButton
                        size="small"
                        onClick={() => {
                          if (selectedQuestionId === q.id) {
                            removeOption(optionIndex);
                          }
                        }}
                        className="remove_option"
                      >
                        ×
                      </IconButton>
                    )}
                  </div>
                ))}

                {selectedQuestionId === q.id && (
                  <div className="question_form_option">
                    <div className="option_indicator">
                      <span className="radio_circle"></span>
                    </div>
                    <button className="add_option_btn" onClick={addOption}>Add option</button>
                    <span className="add_other_option">
                      or <span className="add_other_link">add "Other"</span>
                    </span>
                  </div>
                )}
              </div>

              <div className="question_form_footer">
                <div className="question_form_actions">
                  <IconButton><ContentCopyIcon /></IconButton>
                  <IconButton onClick={() => deleteQuestion(q.id)}><DeleteIcon /></IconButton>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{ margin: '0 12px', backgroundColor: '#ccc' }}
                  />
                </div>
                <div className="question_form_toggle">
                  <span>Required</span>
                  <label className="toggle_switch">
                    <input
                      type="checkbox"
                      checked={selectedQuestionId === q.id ? required : q.required}
                      onChange={(e) => {
                        if (selectedQuestionId === q.id) {
                          setRequired(e.target.checked);
                          const updatedQuestions = questions.map(question =>
                            question.id === q.id 
                              ? { ...question, required: e.target.checked }
                              : question
                          );
                          setQuestions(updatedQuestions);
                        }
                      }}
                    />
                    <span className="toggle_slider"></span>
                  </label>
                </div>
                <IconButton><MoreVertIcon /></IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div ref={sidebarRef} className="question_form_right">
        <IconButton onClick={addQuestion}><AddIcon /></IconButton>
        <IconButton><ContentCopyIcon /></IconButton>
        <IconButton><TitleIcon /></IconButton>
        <IconButton><ImageIcon /></IconButton>
        <IconButton><OndemandVideoIcon /></IconButton>
        <IconButton><SubjectIcon /></IconButton>
      </div>
    </div>
  );
}

export default Question_form;
