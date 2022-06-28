import React from 'react';
import ResearchCard from './ResearchCard';

const Research: React.FC = () => {
    return (
        <div className="p-5 min-h-screen flex justify-center items-center">
            <ResearchCard title="First Research Paper" summary="This was my first paper" />
        </div>
    );
}

export default Research;