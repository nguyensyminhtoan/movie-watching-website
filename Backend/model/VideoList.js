const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(path.dirname(process.mainModule.filename),'data','videoList.json')

const Video = {
  all: function() {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  },
};

//hàm tìm video phù hợp
const findLatestTrailer=(videoList,film_id)=>{
  const filmVideos=videoList.find(video=> video.id===film_id?.video||[])
  // Lọc video phù hợp theo tiêu chí
  const filteredVideos=filmVideos.filter(video=>{
    return video.official && video.site ==='YouTube'&&(video.type === 'Trailer' || video.type === 'Teaser')
  })
   // Nếu có nhiều video thỏa mãn, chọn video có published_at gần nhất
  const latestVideo=filteredVideos.reducer((latest,video)=>{
    return new Date(video.published_at)>new Date(latest.published_at)? video : latest
  },{})
  return latestVideo
}

exports.findTrailer=(film_id)=>{
if(!film_id){return {error:400,message:'Not found film_id parram'}}
const videoList=Video.all()
const selectedVideo=findLatestTrailer(videoList,film_id)
if(!selectedVideo){
  return {error:404,message:'Not found video'}
}
return selectedVideo
}
