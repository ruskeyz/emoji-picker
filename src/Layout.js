import { styled } from 'baseui';

const LayoutParent = styled('div', {
  display: 'grid',
  placeItems: 'center',
  width: '100vw',
  height: '100vh',
});

const LayoutCard = styled('div', {
  display: 'flex',
  width: 'clamp(46ch, 50%, 92ch);',
  flexDirection: 'column',
  padding: '1rem',
});

function Layout({ children }) {
  return (
    <LayoutParent>
      <LayoutCard>
        { children }
      </LayoutCard>
    </LayoutParent>
  );
}

export { Layout };
