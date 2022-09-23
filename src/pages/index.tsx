import React from 'react';

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const res2 = await fetch(`http://ec2-54-238-234-133.ap-northeast-1.compute.amazonaws.com:8080/getpic`);

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: { res1: await res.json(), res2: await res2.json() },
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

function Dogs(props: any) {
  return (
    <main>
      <h1>New Dog Data requested upon every new request by rendering server</h1>
      <img style={{ height: '300px' }} alt='Happy dog' src={props.serverData?.res1?.message} />
      <h1>Persisteed Dog Data requested upon every new request by rendering server</h1>
      <img style={{ height: '300px' }} alt='Happy dog' src={props.serverData?.res2.picUrl} />
    </main>
  );
}

export default Dogs;
