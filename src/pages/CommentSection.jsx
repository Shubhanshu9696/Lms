import axios from 'axios';
import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();


        try {
            const userId = localStorage.getItem('user');

            const response = await axios.post(`http://localhost:4000/comment/${userId}`, {
                comment: newComment
            })
        } catch (error) {
            console.log(error);
            return;
        }
    
        if (newComment.trim()) {
            setComments([...comments, { text: newComment, id: Date.now() }]);
            setNewComment('');
        }
    };

    return (
        <div className="w-full mt-3">
            <h3 className="text-2xl font-bold text-center mb-4">Comments</h3>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <textarea
                    value={newComment}
                    onChange={handleInputChange}
                    placeholder="Write a comment..."
                    className="w-full p-2 border rounded mb-2 text-black"
                />
                <button
                    type="submit"
                    className="px-4 py-2 w-full bg-blue-300 font-bold rounded hover:bg-blue-700 hover:text-white"
                >
                    Post Comment
                </button>
            </form>
            {/* <ul className="space-y-4">
                {comments.map(comment => (
                    <li key={comment.id} className="p-4 border rounded">
                        {comment.text}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default CommentSection;
