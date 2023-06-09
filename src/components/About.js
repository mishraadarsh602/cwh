import React from 'react';

export default function About(props) {
    let myStyle = {
        color: props.mode === "dark" ? "#fff" : "#000",

    };
    return (
        <div className="container" style={myStyle} >
            <h1>About us</h1>
            <p>
                Text utils are a collection of tools that can be used to manipulate text data. They can be used for a variety of tasks, such as:
            </p>
            <ul>
                <li>Formatting text</li>
                <li>Cleaning text</li>
                <li>Extracting information from text</li>
                <li>Change text to UPPERCASE,lowercase and sentenceCase</li>
                <li>Generating random text</li>
                <li>Change text to Speech</li>
                <li>Add Prefix,Suffix </li>
                <li>Reverse para</li>
                <li>Words and characters counter </li>
                <li>Check reading time  </li>
                <li>Replace All Words </li>

            </ul>
            <p>Text utils can be used by developers, students, and anyone else who needs to work with text data. They can be a valuable tool for improving the quality of text data, making it easier to understand and use.</p>
            <p>Here are some of the benefits of using text utils:</p>
            <ul>
                <li><strong>Save time:</strong> Text utils can help you save time by automating tasks that you would otherwise have to do manually. For example, if you want to replace all words with given word it automatically do it by just clicking one button or a text cleaner can automatically remove unwanted characters from text.</li>
                <li><strong>Improve accuracy:</strong> Text utils can help you improve the accuracy of your text data by removing inconsistencies. </li>
                <li><strong>Increase productivity: </strong> Text utils can help you increase your productivity by giving you more time to focus on other tasks.
                </li>
            </ul>
        </div>
    )
}
