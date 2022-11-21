  let url = 'https://vnexpress.net/rss/tin-moi-nhat.rss';
  let url1 = 'https://thanhnien.vn/rss/home.rss';
  let url2 = 'https://vtc.vn/rss/feed.rss';
  let url3 = 'https://www.bongda.com.vn/feed.rss';

  const textarea = document.querySelector('#feed-textarea');

  const date = new Date();
  document.querySelector('#date').innerHTML = date.toLocaleString();
    
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
      for(let entry of feed.entries){
          let div = document.createElement('div');
          div.className = "feed";
          div.innerHTML = `<div class="feed-link"><a href="${entry.link}" target="_blank">${entry.title}</a><div class="description-link">${entry.description}</div><div class="pubDate">${entry.pubDate}</div></div>`;
          textarea.appendChild(div);
      }
    });

    feednami.load(url1)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
      for(let entry of feed.entries){
          let div = document.createElement('div');
          div.className = "feed";
          div.innerHTML = `<div class="feed-link"><a href="${entry.link}" target="_blank">${entry.title}</a><div class="description-link">${entry.description}</div></div>`;
          textarea.appendChild(div);
      }
    });

    feednami.load(url2)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
      for(let entry of feed.entries){
          let div = document.createElement('div');
          div.className = "feed";
          div.innerHTML = `<div class="feed-link"><a href="${entry.link}" target="_blank">${entry.title}</a><div class="description-link">${entry.description}</div></div>`;
          textarea.appendChild(div);
      }
    });

    feednami.load(url3)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
      for(let entry of feed.entries){
          let div = document.createElement('div');
          div.className = "feed";
          div.innerHTML = `<div class="feed-link"><a href="${entry.link}" target="_blank">${entry.title}</a><div class="description-link">${entry.description}</div></div>`;
          textarea.appendChild(div);
      }
    });

    