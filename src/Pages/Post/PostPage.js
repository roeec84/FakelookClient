import React from 'react';
import httpService from '../../http/httpService';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import './PostPage.css';

const PostPage = () => {
    return (
        <div className="post-grid">
            <div className="post-header post-container">
                <span>New post</span>
                <i className="fas fa-image"></i>
            </div>
            <div className="post-form post-container">
                <Form>
                    <div className="post-form-item">
                        <label>Photo:</label>
                        <Input type="file" />
                    </div>
                    <div className="post-form-item">
                        <label>Description (optional):</label>
                        <TextArea />
                    </div>
                    <div className="post-form-item">
                        <label>Tagged friends:</label>
                        <Input />
                    </div>
                </Form>
            </div>
            <div className="post-footer post-container">
                <Button
                    content='Post'
                    icon='upload'
                    color='teal'
                />
            </div>
        </div>
    );
}

export default PostPage;