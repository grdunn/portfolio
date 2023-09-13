function Card(props) {
  return (
    <>
      <div className="c-portfolio-grid__card" data-animate>
        <a href={props.url} target="_blank">{props.title}</a>
        <p>{props.description} </p>
        <div className="c-portfolio-grid__tags">
          <span className="c-portfolio-grid__tag">{props.tag}</span>
        </div>
      </div>
    </>
  )
}

export default Card