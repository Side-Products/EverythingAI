import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'experimental-edge',
};

const iconImage = fetch(new URL('../../../../../public/icon.png', import.meta.url)).then((res) => res.arrayBuffer());
const logoImage = fetch(new URL('../../../../../public/logo.png', import.meta.url)).then((res) => res.arrayBuffer());
export default async function handler() {
    const iconData = await iconImage;
    const logoData = await logoImage;
    const likeCount = 5;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#906de3',
          borderRadius: '0.75rem',
          padding: '0.5rem',
          alignItems: 'center',
          fontSize: 64,
          paddingLeft: '3.5rem'
        }}
      >
        <img src={iconData} width="100" height="100"/>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '3.75rem'
            }}
        >
            <h3 style={{margin: '0px', color: 'white'}}>Featured On</h3>
            <img src={logoData} height="100"/>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            justifySelf: 'flex-end',
            marginLeft: 'auto',
            marginRight: '3.5rem'
        }}>
            <span>❤️</span>
            <span >{likeCount}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 300,
    },
  );
}