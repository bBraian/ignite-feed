import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/bbraian.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Braian Ávila</strong>
                            <time title='11 de Maio às 09:30h' dateTime='2022-05-11 09:30:15'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={() => onDeleteComment(content)} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}