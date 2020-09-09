const features = document.querySelectorAll('.features__list-item')
const currentFeature = {
    picture: document.querySelector('.features__current-item-image'),
    title: document.querySelector('.features__current-item-text h3'),
    text: document.querySelector('.features__current-item-text p'),
}
const featuresList = [
    {
        title: 'Heading Feature title goes here',
        text: 'Nunc accumsan hendrerit nunc, ac venenatis magna facilisis quis. Ut sit amet mi ac neque sodales facilisis. Nullam tempus fermentum lorem nec interdum. Ut id orci id sapien imperdiet vehicula. Etiam quis dignissim ante. Donec convallis tincidunt ligula, ac luctus mi interdum a.'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore culpa adipisci mollitia cupiditate necessitatibus perspiciatis doloremque iste, voluptas reiciendis, id, illum iure deleniti repudiandae facilis error veniam aperiam minus.'
    },
    {
        title: 'Corporis quae, voluptate corrupti',
        text: 'Corporis quae, voluptate corrupti voluptatibus odio fugiat vel dolorum odit ratione dolores suscipit laboriosam delectus pariatur aperiam recusandae, quas at quos id vitae illo numquam laudantium magnam! Rerum, consectetur ab?'
    },
    {
        title: 'Quae sapiente a repudiandae',
        text: 'Quae sapiente a repudiandae voluptate est pariatur libero eaque facilis. Dolores expedita ullam repudiandae tempore ab, est amet exercitationem, impedit quos delectus pariatur distinctio sit? Sapiente harum possimus expedita! Beatae?'
    },
    {
        title: 'Dolorum dicta earum minus',
        text: 'Dolorum dicta earum minus iste dolor eaque eos quod provident, impedit repellat laboriosam iure maiores similique asperiores molestiae ex voluptates nisi porro dolore suscipit ratione cumque amet ipsam? Nesciunt, deleniti.'
    }
]

let activeFeatureId = 0

function changeFeature(id) {
    features[activeFeatureId].classList.remove('active')
    features[id].classList.add('active')
    activeFeatureId = id
}

changeFeature(0)

features.forEach((item, index) => item.addEventListener('click', function () {
    changeFeature(index)
    currentFeature.picture.innerHTML = item.querySelector('span').innerHTML
    currentFeature.title.innerHTML = featuresList[index].title
    currentFeature.text.innerHTML = featuresList[index].text
}))