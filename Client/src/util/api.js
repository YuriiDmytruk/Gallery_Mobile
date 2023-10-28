const URL = 'http://10.0.2.2:4000/';

const getImages = async () => {
  try {
    const author = '653a4d862fec355aa279251e';
    const amount = '';

    const response = await fetch(
      URL + `images/?author=${author}&amount=${amount}`,
      {
        method: 'GET',
      }
    );
    if (response.ok) {
      const data = await response.json();
      if (data.statusCode === 200) {
        return data.value;
      }
      console.log(response.errorMessage);
      return [];
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};

const postImage = async (image) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};

const putUser = async (user) => {
  try {
    const response = await fetch(URL + 'users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};

const postUser = async (user) => {
  try {
    const response = await fetch(URL + '/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
};

export { getImages, postImage, putUser, postUser };
