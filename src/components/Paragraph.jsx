import { ContentParagraph } from "./ParagraphStyle"

const Paragraph = ({id, textParagraph}) => {
  return(
    <ContentParagraph id={id}>{textParagraph}</ContentParagraph>
  )
}

export default Paragraph