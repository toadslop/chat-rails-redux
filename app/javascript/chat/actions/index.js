/* eslint-disable import/prefer-default-export */
const baseUrl = "/api/v1/channels/"

export function getChannels() {
  const promise = fetch(`${baseUrl}`).
    then(response => response.json());
  return {
    type: 'GET_CHANNELS',
    payload: promise
  }
}

export function getMessages(selectedChannel) {
  const promise = fetch(`${baseUrl}${selectedChannel}/messages`)
    .then(response => response.json());
  return {
    type: 'GET_MESSAGES',
    payload: promise
  };
}

export function createMessage(channel, content) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const body = {
    content
  };
  console.log(body);
  const promise = fetch(`${baseUrl}${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: "CREATE_MESSAGE",
    payload: promise
  };
}

export function updateInputValue(inputValue) {
  return {
    type: 'UPDATE_INPUT_VALUE',
    payload: inputValue
  };
}

export function clearInput() {
  return {
    type: 'CLEAR_INPUT',
    payload: ""
  };
}
