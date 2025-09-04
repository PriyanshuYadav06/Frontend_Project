import React, { useState } from 'react'
import { RiFolderAddFill } from 'react-icons/ri';
export default function List({ list, setData }) {
    const [isExpanded, setIsExpanded] = useState({});
    const addNodeToList = (id) => {
        console.log(id);
    }
    return (
        <div className="container">
            {list.map((node) => (
                <div key={node.id}>
                    {node.isFolder && <span className='icon' onClick={() => setIsExpanded((prev) => {
                        let flag = isExpanded[node.name] || false;
                        return {
                            ...prev,
                            [node.name]: !flag,
                        }
                    })}>
                        {isExpanded?.[node.name] ? "- " : "+ "}</span>}
                    <span>{node.name}</span>
                    {node?.isFolder && <RiFolderAddFill style={{ width: "20px", marginLeft: "5px", marginTop: "10px", cursor: "pointer" }}
                        onClick={() => { addNodeToList(node?.id) }}
                    />}
                    {(node?.children && isExpanded?.[node.name]) && <List list={node.children} />}
                </div>))}
        </div>
    )
}
