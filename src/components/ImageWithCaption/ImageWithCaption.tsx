export interface IImageWithCaptionProps {
  imageSrc: string;
  caption: string;
  alt: string;
  aspectRatio: string;
}

export const ImageWithCaption = ({imageSrc, caption, alt, aspectRatio}: IImageWithCaptionProps) => {
  return (
    <div className="text-center">
        <img style={{width: '80%', height: 'auto', aspectRatio }} className="object-fit-scale" src={`${process.env.PUBLIC_URL}/${imageSrc}`} alt={alt} />
        <p className="text-muted"><small>{caption}</small></p>
    </div>
  );
};