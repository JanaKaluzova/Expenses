import './Card.css'

type Props = {
  children: JSX.Element
  className: string
}
export const Card = (props: Props) => {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}
