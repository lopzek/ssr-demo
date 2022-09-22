import React from 'react';

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await res.json(),
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
      <h1>New Dog, requested upon every new request</h1>
      <img style={{ height: '300px' }} alt='Happy dog' src={props.serverData?.message} />
    </main>
  );
}

export default Dogs;
