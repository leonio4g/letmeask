import { ReactNode } from 'react';
import cx from 'classnames'
import '../styles/question.scss';

type QuestionProps = {
  content: string;
  author : {
    name:string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLigted?: boolean;
}

export function Questions({
  content, 
  author, 
  children,
  isAnswered = false,
  isHighLigted=false,
} : QuestionProps) {
  return (
    <div className={cx(
      'question',
      { answered: isAnswered },
      { highlight: isHighLigted && !isAnswered}
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}