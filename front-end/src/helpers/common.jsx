export async function fetchData(endpoint, token, method, body) {
  const res = await fetch(import.meta.env.VITE_SERVER + endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  let returnValue = {};

  if (res.ok) {
    if (data.status === "error") {
      returnValue = { ok: false, data: data.message };
    } else {
      returnValue = { ok: true, data };
    }
  } else {
    if (data?.errors && Array.isArray(data.errors)) {
      const messages = data.errors.map((item) => item.msg);
      returnValue = { ok: false, data: messages };
    } else if (data?.status === "error") {
      returnValue = { ok: false, data: data.message };
    } else {
      console.log(data);
      returnValue = { ok: false, data: "An error has occurred" };
    }
  }
  return returnValue;
}

export function handleNewline(paragraph) {
  if (!paragraph) {
    return;
  }
  const strArr = paragraph.split("\n");
  return strArr.map((item, idx) => {
    if (idx === 0) {
      return <span key={idx}>{item}</span>;
    } else {
      return (
        <span key={idx}>
          <br />
          <>{item}</>
        </span>
      );
    }
  });
}

export function calculateRating(ratingObj) {
  if (ratingObj.reviewCount == 0) {
    return 0;
  } else {
    return ratingObj.ratingTotal / ratingObj.reviewCount / 2;
  }
}
