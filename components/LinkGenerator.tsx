import { subjects } from "@lib/subjects";
import { useEffect, useRef, useState } from "react";

const LinkGenerator = () => {
    var subject;
    var task;

    const [linkSubject, setLinkSubject] = useState('');
    const [linkTask, setLinkTask] = useState('');

    var when;

    const taskText = useRef(null);
    const resetForm = () => {
        setLinkTask('  ');
    };
    
    const [link, setLink] = useState(``);

    const changeSubject = (e) => {
        subject = e.target.value;
        setLinkSubject(subject);
    };

    const changeTask = (e) => {
        task = e.target.value;
        setLinkTask(task);
    }

    const subjectSelect = useRef(null);

    useEffect(() => {
        subject = subjectSelect.current.value;
        setLinkSubject(subject);
        console.log(subject);
    }, []);

    useEffect(() => {
        setLink(`things:///add?title=%5B${linkSubject}%5D%20${linkTask}&list=Hausaufgaben`);
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
                    <select ref={subjectSelect} name="subject" onChange={changeSubject} value={subject}>
                        {subjects.map((option) => (
                            <option value={option.value} label={option.label} key={option.key} />
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