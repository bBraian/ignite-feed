import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  { 
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/bbraian.png',
      name: 'Braian Viacava de Ávila',
      role: 'Web Developer'
    },
    content: [
      { type: 'p', content: 'Fala galeraa 👋'},
      { type: 'p', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'a', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  { 
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'p', content: 'Fala galeraa 👋'},
      { type: 'p', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'a', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}

export default App
