import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

const iconImage = fetch(new URL('../../../../../public/icon.png', import.meta.url)).then((res) => res.arrayBuffer());
const logoImage = fetch(new URL('../../../../../public/logo.png', import.meta.url)).then((res) => res.arrayBuffer());
export default async function handler(req) {
  const iconData = await iconImage;
  const logoData = await logoImage;
  const splittedPath = req.nextUrl.pathname.split('/');
  const getLikesUrl = `http://localhost:3000/api/tools/get-likes/${splittedPath[splittedPath.length-1]}`;
  const likeCountFetch = await fetch(getLikesUrl).then(res => res);
  const likeCount = await likeCountFetch.json().then(data => data)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#906de3',
          borderRadius: '2.75rem',
          padding: '0.5rem',
          alignItems: 'center',
          fontSize: 80,
          paddingLeft: '4.5rem'
        }}
      >
        <img src={iconData} width="150" height="150"/>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '4.5rem'
            }}
        >
            <h3 style={{margin: '0px', color: 'white'}}>Featured On</h3>
            <img src={logoData} height="125"/>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            justifySelf: 'flex-end',
            marginLeft: 'auto',
            marginRight: '4.5rem'
        }}>
            <span>❤️</span>
            <span>{likeCount.likes}</span>
        </div>
      </div>
    ),
    {
      width: 1600,
      height: 400,
    },
  );
}