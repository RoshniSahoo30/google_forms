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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


import './Question_form.css';

function Question_form() {
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

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      questionText: '',
      questionType: 'Multiple choice',
      options: ['Option 1'],
      required: false
    };
    setQuestions((prev) => [...prev, newQuestion]);
    setSelectedQuestionId(newQuestion.id);
  };

  const updateQuestion = (id, updates) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updates } : q))
    );
  };

  const addOption = (id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? { ...q, options: [...q.options, `Option ${q.options.length + 1}`] }
          : q
      )
    );
  };

  const updateOption = (id, index, value) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const newOptions = [...q.options];
          newOptions[index] = value;
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  const removeOption = (id, index) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === id && q.options.length > 1) {
          const newOptions = q.options.filter((_, i) => i !== index);
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  const deleteQuestion = (id) => {
    if (questions.length === 1) return;
    const updated = questions.filter((q) => q.id !== id);
    setQuestions(updated);

    if (selectedQuestionId === id && updated.length > 0) {
      const index = questions.findIndex((q) => q.id === id);
      const next = questions[index + 1] || questions[index - 1] || updated[0];
      setSelectedQuestionId(next?.id);
    }
  };

  const copyQuestion = (id) => {
    const original = questions.find((q) => q.id === id);
    if (!original) return;

    const newQuestion = {
      ...original,
      id: Date.now(),
      options: [...original.options]
    };

    setQuestions((prev) => [...prev, newQuestion]);
    setSelectedQuestionId(newQuestion.id);
  };

  useEffect(() => {
    setTimeout(() => {
      const currentRef = questionRefs.current[selectedQuestionId];
      const sidebar = sidebarRef.current;

      if (currentRef && sidebar) {
        const rect = currentRef.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        sidebar.style.top = `${rect.top + scrollTop}px`;
      }
    }, 0);
  }, [selectedQuestionId, questions.length]);

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

        {questions.map((q) => (
          <div
            className="section"
            key={q.id}
            ref={(el) => (questionRefs.current[q.id] = el)}
            onClick={() => setSelectedQuestionId(q.id)}
          >
            <div
              className={`question_form_question ${
                selectedQuestionId === q.id ? 'active' : ''
              }`}
            >
              <div className="question_form_header">
                <div className="question_form_header_left">
                  <input
                    type="text"
                    className="question_form_input"
                    placeholder="Question"
                    value={q.questionText}
                    onChange={(e) =>
                      updateQuestion(q.id, { questionText: e.target.value })
                    }
                  />
                </div>
                <div className="question_form_header_right">
                  <IconButton>
                    <ImageIcon />
                  </IconButton>
                  <select
                    className="question_form_select"
                    value={q.questionType}
                    onChange={(e) =>
                      updateQuestion(q.id, { questionType: e.target.value })
                    }
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
                <IconButton size="small">
                  <FormatBoldIcon />
                </IconButton>
                <IconButton size="small">
                  <FormatItalicIcon />
                </IconButton>
                <IconButton size="small">
                  <FormatUnderlinedIcon />
                </IconButton>
                <IconButton size="small">
                  <LinkIcon />
                </IconButton>
              </div>

              <div className="question_form_options">
                {q.options.map((option, index) => (
                  <div key={index} className="question_form_option">
                    <div className="option_indicator">
                      <span className="radio_circle"></span>
                    </div>
                    <input
                      type="text"
                      className="option_input"
                      value={option}
                      onChange={(e) =>
                        updateOption(q.id, index, e.target.value)
                      }
                      placeholder={`Option ${index + 1}`}
                    />
                    {q.options.length > 1 && (
                      <IconButton
                        size="small"
                        onClick={() => removeOption(q.id, index)}
                        className="remove_option"
                      >
                        ×
                      </IconButton>
                    )}
                  </div>
                ))}

                <div className="question_form_option">
                  <div className="option_indicator">
                    <span className="radio_circle"></span>
                  </div>
                  <button
                    className="add_option_btn"
                    onClick={() => addOption(q.id)}
                  >
                    Add option
                  </button>
                  <span className="add_other_option">
                    or <span className="add_other_link">add "Other"</span>
                  </span>
                </div>
              </div>

              <div className="question_form_footer">
                <div className="question_form_actions">
                  <IconButton onClick={() => copyQuestion(q.id)}>
                    <ContentCopyIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteQuestion(q.id)}>
                    <DeleteIcon />
                  </IconButton>
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
                      checked={q.required}
                      onChange={(e) =>
                        updateQuestion(q.id, { required: e.target.checked })
                      }
                    />
                    <span className="toggle_slider"></span>
                  </label>
                </div>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div ref={sidebarRef} className="question_form_right">
        <IconButton onClick={addQuestion}>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ContentCopyIcon />
        </IconButton>
        <IconButton>
          <TitleIcon />
        </IconButton>
        <IconButton>
          <ImageIcon />
        </IconButton>
        <IconButton>
          <OndemandVideoIcon />
        </IconButton>
        <IconButton>
          <SubjectIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Question_form;
