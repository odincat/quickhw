import { subjects } from "@lib/subjects";
import { useEffect, useRef, useState } from "react";

const LinkGenerator = () => {
    var list = 'Hausaufgaben';

    const [linkSubject, setLinkSubject] = useState('');
    const [linkTask, setLinkTask] = useState('');
    const [link, setLink] = useState(``);

    //TODO: Add Date support
    var when;

    const taskText = useRef(null);
    
    const resetForm = () => {
        setLinkTask('  ');
    };
    
    const changeSubject = (e) => {
        setLinkSubject(e.target.value);
    };

    const changeTask = (e) => {
        setLinkTask(e.target.value);
    }

    const subjectSelect = useRef(null);

    useEffect(() => {
        setLinkSubject(subjectSelect.current.value);
        console.log(linkSubject);
    }, []);

    useEffect(() => {
        setLink(`things:///add?title=%5B${linkSubject}%5D%20${linkTask}&list=${list}`);
    }, [linkSubject, linkTask]);

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="generate-link">
            <header>
            <h1>Generate a new link</h1>
            <p>This small tool allows you to generate a link for Things 3 by using presets.</p>
            </header>
            <div className="generate-link-main">
                <form onSubmit={submitForm}>
                <h3>Subject: </h3>
                    <select ref={subjectSelect} name="subject" onChange={changeSubject}>
                        {subjects.map((option) => (
                            <option value={option.value} label={option.label} key={option.key}>{option.label}</option>
                        ))}
                    </select> <br/>
                    <h3>Task: </h3>
                    <textarea ref={taskText} onChange={changeTask} value={linkTask}></textarea> <br/>
                </form>
            </div>
            <div className="center">
                <a href={link} target="_blank" rel="noreferrer"><button type="submit" onClick={resetForm}>Create Task</button></a>
            </div>
        </div>
    );
};

export default LinkGenerator;