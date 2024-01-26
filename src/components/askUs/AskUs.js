import React, {useState} from 'react';

const AskUs = () => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Question submitted:', question)
        setQuestion('');
    };
  return (
    <div>
      <h2>Ask Us</h2>
      <form onSubmit={handleSubmit}>
        <label>Your Question:</label>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)}
        placeholder='Type your question here...'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AskUs;