import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Question_form.css';

function Question_form() {
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('Multiple choice');
  const [options, setOptions] = useState(['Option 1']);
  const [required, setRequired] = useState(false);

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

  return (
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

      <div className="section">
        <div className="question_form_question">
          <div className="question_form_header">
            <div className="question_form_header_left">
              <input
                type="text"
                className="question_form_input"
                placeholder="Question"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
              />
            </div>
            <div className="question_form_header_right">
              <IconButton>
                <ImageIcon />
              </IconButton>
              <select
                className="question_form_select"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
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
            {options.map((option, index) => (
              <div key={index} className="question_form_option">
                <div className="option_indicator">
                  <span className="radio_circle"></span>
                </div>
                <input
                  type="text"
                  className="option_input"
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                />
                {options.length > 1 && (
                  <IconButton
                    size="small"
                    onClick={() => removeOption(index)}
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
              <button className="add_option_btn" onClick={addOption}>
                Add option
              </button>
              <span className="add_other_option">
                or <span className="add_other_link">add "Other"</span>
              </span>
            </div>
          </div>

          <div className="question_form_footer">
            <div className="question_form_actions">
              <IconButton>
                <ContentCopyIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
            <div className="question_form_toggle">
              <span>Required</span>
              <label className="toggle_switch">
                <input
                  type="checkbox"
                  checked={required}
                  onChange={(e) => setRequired(e.target.checked)}
                />
                <span className="toggle_slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question_form;