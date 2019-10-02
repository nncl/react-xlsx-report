import React, {Component} from 'react';
import {CSVLink} from "react-csv";

export default class List extends Component {
    state = {
        csvData: [
            {firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com"},
            {firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com"},
            {firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com"}
        ],
        fileName: 'test'
    };

    render() {
        const {csvData, fileName} = this.state;
        return (
            <>
                <CSVLink data={csvData} filename={fileName}>Download</CSVLink>
            </>
        )
    }
}
