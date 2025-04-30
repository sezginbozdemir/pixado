interface Props {
  size: number;
}

const Spacing: React.FC<Props> = ({ size }) => {
  const style = { height: `${size}rem`, width: "100%" };

  return <div style={style} />;
};

export default Spacing;
