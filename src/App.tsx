import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import TodoFormPage from './pages/TodoFormPage';

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoListPage />} />
                <Route path="/todo/new" element={<TodoFormPage />} />
                <Route path="/todo/:id/edit" element={<TodoFormPage />} />
            </Routes>
        </Router>
    );
};



export default App;
