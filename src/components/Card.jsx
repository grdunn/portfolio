function Card(props) {
  return (
    <>
      <div className="c-portfolio-grid__card">
        <h3>{props.title}</h3>
        <p>{props.description} <a href="{props.url}">{props.link}</a></p>
        <div className="c-portfolio-grid__tags">
          <span className="c-portfolio-grid__tag">{props.tag}</span>
        </div>
      </div>
    </>
  )
}

export default Card