

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// creating array of objects for reviews
import { Pagination } from 'swiper/modules';

const reviews = [
    {
        id: 1, name: "Dianne Russell", company: "Starbucks", comment: "it is a distinct pleasure for me to recommend Thrive Internet Marketing to any and all interested parties. They have been professional, comprehensive and competent throughout the process of our working together", photo: "/src/assets/product_14.png"
    },
    {
        id: 2, name: "Kristin Watson", company: "Louis Vuitton", comment: "With Thrive’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain", photo: "/src/assets/Avatar2.png"
    },
    {
        id: 3, name: "Kathryn Murphy", company: "McDonald's", comment: "I speak for the trolley district when I tell you how pleased we are with the web site you designed for us. The district needed a site that addressed varied aspects of our operation. You have met those needs and then some! ", photo: "/src/assets/Avatar3.png"
    },
    {
        id: 4, name: "Dianne Russell", company: "Starbucks", comment: "I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program.I would recommend Thrive to anyone looking for website design or SEO work!", photo: "/src/assets/Avatar1.png"
    },
    {
        id: 5, name: "Kristin Watson", company: "Louis Vuitton", comment: "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Thrive has been great. They handle things very efficiently and are available for any questions we have.", photo: "/src/assets/Avatar2.png"
    },
    {
        id: 6, name: "Kathryn Murphy", company: "McDonald's", comment: "We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Thrive the first time ", photo: "/src/assets/Avatar3.png"
    },
]


const Review = () => {
    return (
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
            clickable: true,
          }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper -z-0"
      >
        {
            reviews.map(review => <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded'>
                    <div>
                        <img src="/src/assets/starts.png" alt=""  className='h-4'/>
                        <p className='my-5'> {review.comment}</p>
                        <div className='flex gap-4 items-center'>
                            <img src={review.photo} alt="" className='h-10' />
                            <div>
                                <p>{review.name}</p>
                                <p className='text-sm'>{review.company}</p>
                            </div>
                        </div>
                    </div>
            </SwiperSlide>)
        }
      </Swiper>
        </>
    );
};

export default Review;