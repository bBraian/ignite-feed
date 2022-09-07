import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post(props) {
    const dateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const dateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComments] = useState([
        'Muito show!',
        'Legal!!'
    ]);

    const [commentValue, setCommentValue] = useState('');

    function handleChangeComment() {
        setCommentValue(event.target.value);
    }

    function handleAddNewComment() {
        event.preventDefault();
        setComments([...comments, commentValue]);
        setCommentValue('');
    }

    function deleteComment(commentDelete) {
        let commetListWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentDelete
        })
        setComments(commetListWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                <time title={dateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {dateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    return line.type == 'p' ? <p key={line.content}>{line.content}</p> : <p key={line.content}><a href="#">{line.content}</a></p>
                })}
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form onSubmit={handleAddNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                    onChange={handleChangeComment}
                    value={commentValue}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(line => {
                    return (
                        <Comment 
                            key={line} 
                            content={line}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}