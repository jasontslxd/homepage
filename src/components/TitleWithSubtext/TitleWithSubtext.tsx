export interface ITitleWithSubtextProps {
  title: string
  subtext: string
}

export const TitleWithSubtext = ({ title, subtext }: ITitleWithSubtextProps) => {
  return (
    <p className="m-0">
      <span className="fw-bold">{title}</span> <span className="text-muted">({subtext})</span>
    </p>
  )
}
