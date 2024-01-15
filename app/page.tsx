async function GetData() {
  //comando de busca de dados no sanity
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
        smallDescription,
        "currentSlug": slug.current
    }
  `
}

export default function Home() {
  return <div>oi</div>
}
