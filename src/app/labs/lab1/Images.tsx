export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA00452/PIA00452~orig.jpg"
        width="200px"
        alt="Mars"
      />
      <img
        id="wd-your-image"
        src="/images/BonJovi-ItsMyLife.jpg"
        height="200px"
        alt="My first rock song"
      />
    </div>
  );
}