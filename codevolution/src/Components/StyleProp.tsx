interface styleProp {
  styles: React.CSSProperties;
}

const StyleProp = ({ styles }: styleProp) => {
  return <div style={styles}>Testing Style through Props</div>;
};

export default StyleProp;
