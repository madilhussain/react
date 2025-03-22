import Blog from './Blog'

function App() {

  const blogPosts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Top SEO Strategies for 2024',
      href: '#',
      description: 'Discover the latest SEO strategies to improve your website ranking. Learn about keyword research, backlinks, and on-page SEO techniques.',
      date: 'Jan 10, 2024',
      datetime: '2024-01-10',
      category: { title: 'SEO', href: '#' },
      author: {
        name: 'Emily Carter',
        role: 'SEO Expert',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'How to Master Digital Marketing',
      href: '#',
      description: 'Digital marketing is evolving rapidly. Learn how to stay ahead with the latest trends in social media, content marketing, and email campaigns.',
      date: 'Feb 5, 2024',
      datetime: '2024-02-05',
      category: { title: 'Digital Marketing', href: '#' },
      author: {
        name: 'David Lee',
        role: 'Marketing Strategist',
        href: '#',
        imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    }
  ]

  return (
    <>
      <Blog posts={blogPosts} />
    </>
  )
}

export default App
