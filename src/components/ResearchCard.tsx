import React from 'react';

type Props = {
    title: string,
    summary: string,
}

const ResearchCard: React.FC<Props> = ({title, summary}) => {
    return (
        <div className="card w-32 bg-slate-300 text-black">
            <h2 className="font-bold">{title}</h2>
            <p>{summary}</p>
        </div>
    );
}

export default ResearchCard;