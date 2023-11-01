const URL = 'http://10.0.2.2:4000/';

const getImages = async (userId, amount) => {
  try {
    const response = await fetch(
      URL + `images/?author=${userId}&amount=${amount}`,
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
    const response = await fetch(URL + 'images', {
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
    const response = await fetch(URL + 'users', {
      method: 'POST',
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

const putScore = async (score) => {
  try {
    const response = await fetch(URL + 'scores', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score }),
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
}

const getUsers = async (search, friends, userId, key) => {
  try {
    const response = await fetch(
      URL + `users/?search=${search}&friends=${JSON.stringify(friends)}&userId=${userId}&key=${key}`,
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

const patchFriend = async (userId, friendId, key) => {
  try {
    const response = await fetch(URL + 'users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: userId, friendId: friendId, key: key }),
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
}


export { getImages, postImage, putUser, postUser, putScore, getUsers, patchFriend };
