import Btn from '../ui/button/Button';

// CTA buttons Component
const IntroBtn = function (props) {
  const orderBtnStyles = {
    background: '#2F2105',
    boxShadow: '0px 4px 32px rgba(223, 195, 124, 0.25)',
    borderRadius: '33px',
  };

  return (
    <Btn
      display='flex'
      sx={props.hasBg ? orderBtnStyles : ''}
      variant='unstyled'
      h={12}
      pr={8}
      pl={8}
      alignItems='center'
    >
      {props.children}
    </Btn>
  );
};

export default IntroBtn;
