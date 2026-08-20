import { FinalCTA } from "@/components/final-cta";
import { Icon } from "@/components/icons";
import { MobileReviewList } from "@/components/mobile-review-list";
import { SiteFooter } from "@/components/site-footer";
import { TrustSignals } from "@/components/trust-signals";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Customer Reviews for Ferguson & Sons Mechanical LLC",
  description: "Read the verified Google reviews and Facebook recommendations preserved for Ferguson & Sons Mechanical LLC in Chesapeake, Virginia.",
  path: "/reviews/",
});

type ArchivedReview = {
  name: string;
  platform: "Google" | "Facebook";
  date: string;
  rating?: 5;
  recommendation?: string;
  paragraphs?: string[];
};

const googleReviews: ArchivedReview[] = [
  { name: "Juanita Bishop", platform: "Google", date: "2 months ago", rating: 5, paragraphs: ["Memorial Day and my A/C went out!!! Ferguson came to the rescue. When I tell you this guy knows the business! 25 plus years experience! Friendly, professional and most of all Honest and trustworthy THANKS Ferguson and Sons!!"] },
  { name: "Betty Ferguson", platform: "Google", date: "3 weeks ago", rating: 5, paragraphs: ["Chance diagnosed and fixed our air conditioner After we had a company tell us that it would Require a part that we were sure it didn’t need. And it didn’t.He was knowledgeable,prompt, And friendly.We highly recommend him for any Heating and air issues."] },
  { name: "Colby Heard", platform: "Google", date: "2 weeks ago", rating: 5, paragraphs: ["Outstanding customer service . I’m gonna tell all my friends"] },
  { name: "landon hood", platform: "Google", date: "2 weeks ago", rating: 5, paragraphs: ["Best in the business!"] },
  { name: "Darlene Dow", platform: "Google", date: "2 weeks ago", rating: 5, paragraphs: ["I’ve had a rough summer with my two units, but Ferguson and Sons have been great. They came out very quickly, took the time to educate me about what was wrong, and had it up and running the same day. Chance and Justin were professional, knowledgeable, reasonably priced, and honest. I highly recommend this company!"] },
  { name: "Chris Tan", platform: "Google", date: "2 weeks ago", rating: 5, paragraphs: ["Had an outstanding experience with Ferguson and Sons!", "My HVAC went out on July 18, 2026, during one of the hottest days of the year. I first called the company that had performed maintenance on my unit just two days earlier, but they completely blew us off.", "I reached out to Ferguson and Sons, and Chance came out the same day to diagnose the problem. It turned out the compressor had failed. He took care of the warranty process for my RUUD unit, which took a few days, but he was able to give me a ride to purchase temporary AC units for my house. That level of customer service made a stressful situation much easier.", "Once the warranty was approved, he promptly installed the new compressor, filter, capacitor, and refrigerant. He was professional, knowledgeable, and transparent throughout the entire process, and the pricing was fair with no surprises.", "I'll definitely be using Ferguson and Sons again for my HVAC needs. If you're looking for honest, reliable service, don't overlook the smaller companies—they often go above and beyond. Highly recommend!"] },
  { name: "geunjae Lee", platform: "Google", date: "2 weeks ago", rating: 5, paragraphs: ["I cannot recommend Chance highly enough! After dealing with ongoing AC/and water pump issues that should have been addressed in timely manner, Chance responded quickly and came out right away and thoroughly assessed everything, and corrected the problems properly. He was knowledgeable, honest, and took the time to explain exactly what was wrong and how he was fixing it.", "He never made me feel rushed and truly cared about doing the job the right way instead of taking shortcuts.", "It’s such a relief to finally have peace of mind knowing our AC and water pump is functioning as it should. If you’re looking for a HVAC guy who is reliable, professional, and genuinely cares about his customers, Chance is the person to call. Thank you again for all of your hard work!"] },
  { name: "Kevin Carlson", platform: "Google", date: "2 weeks ago", rating: 5, paragraphs: ["Responsive, knowledgeable, friendly and reasonable!"] },
  { name: "Justin Hoffman", platform: "Google", date: "3 weeks ago", rating: 5, paragraphs: ["Same day service with the owner chance Ferguson. His knowledge and professionalism are outstanding. Family owned and operated business you can't ask for better!"] },
  { name: "Riley Geiger", platform: "Google", date: "3 weeks ago", rating: 5 },
  { name: "Twin Zapata", platform: "Google", date: "3 weeks ago", rating: 5 },
];

const facebookReviews: ArchivedReview[] = [
  { name: "Dave Deuel", platform: "Facebook", date: "August 4", recommendation: "Recommends Ferguson & Sons Mechanical LLC.", paragraphs: ["Our AC went out last night, so we called Chance Ferguson because several of our neighbors recommended him. He arrived this AM and fixed the issue (bad capacitor) in only a few minutes. He’s very knowledgeable and reasonably priced. I recommend him for any AC work."] },
  { name: "Juanita L Bishop", platform: "Facebook", date: "May 25", recommendation: "Recommends Ferguson & Sons Mechanical LLC.", paragraphs: ["Memorial Day and my A/C went out!!! Ferguson came to the rescue. When I tell you this guy knows the business! 25 plus years experience! Friendly, professional and most of all Honest and trustworthy\nTHANKS Ferguson and Sons!!"] },
  { name: "Jamie Lee", platform: "Facebook", date: "April 18", recommendation: "Recommends Ferguson & Sons Mechanical LLC.", paragraphs: ["We Highly recommend Chance Ferguson for any HVAC service you may need. Whether it’s routine maintenance or urgent need, he will do his best to fit you in. He gave us outstanding service and We are happy to say we found our new contact for any HVAC needs."] },
  { name: "William Peed", platform: "Facebook", date: "March 8", recommendation: "Recommends Ferguson & Sons Mechanical LLC.", paragraphs: ["Spring Maintenance for HVAC.", "Just had our spring HVAC maintenance done and wanted to give a shout out to Chance and Kara Ferguson. A friend recommended them after Chance helped with a repair and said he was on time, did great work, and was way more affordable than the big company they called at first.\nI called Kara and she got us scheduled just a couple days later on Sunday morning. Chance actually showed up a few minutes early, explained what he was going to do, and got right to work. He started in the attic cleaning the inside coil, then went outside and went through the whole unit.\nHe replaced our contactor (it was still the original on our 18-year-old unit and was slow to close), checked the capacitor, and gave the outdoor unit a full cleaning. He checked the refrigerant pressure and explained it was a little low. He measured the temps at the vents and it was only about a 10° difference after running for a while, so he added refrigerant. After letting it run about 20 more minutes the difference was up to around 19 or 20 from intake to vents, which is explained is right where it needs to be.\nHe also took pictures along the way and used them to explain what he found and what he fixed, which I really appreciated, especially since it was his first time working on our system.\nOverall he was on time, did solid work, and the price was very reasonable."] },
  { name: "Justin Hoffman", platform: "Facebook", date: "February 22", recommendation: "Recommends Ferguson & Sons Mechanical LLC.", paragraphs: ["id like to give a big thanks to chance Ferguson and Ferguson and sons for coming out and diagnosing our furnace problem swiftly. chance went in the attic and found the problem right away and got us up and running. appreciate you big time brother!"] },
];

function Stars() {
  return <span className="reviews-stars" aria-label="5 out of 5 stars">★★★★★</span>;
}

function ArchivedReviewCard({ review }: { review: ArchivedReview }) {
  return (
    <article className={`reviews-card reviews-card--${review.platform.toLowerCase()}`}>
      <header>
        <span className="reviews-card__platform"><Icon name={review.platform === "Google" ? "google" : "facebook"} width={22} height={22} /></span>
        <div><h3>{review.name}</h3><p>{review.platform === "Google" ? review.platform : `${review.platform} · ${review.date}`}</p></div>
      </header>
      {review.rating ? <Stars /> : <p className="reviews-card__recommendation"><Icon name="check" width={16} height={16} />{review.recommendation}</p>}
      {review.paragraphs ? (
        <blockquote>{review.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</blockquote>
      ) : <p className="reviews-card__no-text">No written review shown.</p>}
    </article>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader activePath="/reviews/" />
      <main>
        <section className="reviews-hero" aria-labelledby="reviews-page-title">
          <div className="site-container reviews-hero__layout">
            <div>
              <p className="section-eyebrow"><span aria-hidden="true" />Verified Customer Feedback</p>
              <h1 id="reviews-page-title">What Customers Say About Ferguson &amp; Sons</h1>
              <p>Read the Google reviews and Facebook recommendations preserved in the Ferguson &amp; Sons review archive.</p>
              <div className="reviews-hero__actions"><ButtonLink href="/contact/#schedule-service">Get Scheduled Today</ButtonLink><ButtonLink href="tel:+17574067135" variant="outline" inverse><Icon name="phone" width={17} height={17} />Call Now</ButtonLink></div>
            </div>
            <div className="reviews-hero__summaries">
              <a href="https://share.google/6VmLpJkW5oOySqGqF" target="_blank" rel="noreferrer"><span className="reviews-summary__icon"><Icon name="google" width={28} height={28} /></span><strong>5.0</strong><Stars /></a>
              <a href="https://www.facebook.com/profile.php?id=61586880370088" target="_blank" rel="noreferrer"><span className="reviews-summary__icon"><Icon name="facebook" width={28} height={28} /></span><strong>100%</strong><b>Recommend</b></a>
            </div>
          </div>
        </section>

        <section className="reviews-section" aria-labelledby="google-reviews-title">
          <div className="site-container">
            <div className="reviews-section__heading"><div><p className="section-eyebrow">Google Reviews</p><h2 id="google-reviews-title">5.0 Rated on Google</h2></div><p>Verified customer feedback from Google.</p></div>
            <MobileReviewList id="google-review-list" collapsedLabel="See More Google Reviews" platform="google">
              {googleReviews.map((review) => <ArchivedReviewCard key={`${review.platform}-${review.name}`} review={review} />)}
            </MobileReviewList>
          </div>
        </section>

        <section className="reviews-section reviews-section--facebook" aria-labelledby="facebook-reviews-title">
          <div className="site-container">
            <div className="reviews-section__heading"><div><p className="section-eyebrow">Facebook Recommendations</p><h2 id="facebook-reviews-title">100% Recommended on Facebook</h2></div><p>Verified customer recommendations from Facebook.</p></div>
            <MobileReviewList id="facebook-review-list" collapsedLabel="See More Facebook Recommendations" platform="facebook">
              {facebookReviews.map((review) => <ArchivedReviewCard key={`${review.platform}-${review.name}`} review={review} />)}
            </MobileReviewList>
          </div>
        </section>
        <section className="reviews-mobile-trust" aria-label="Company trust points">
          <div className="site-container">
            <TrustSignals variant="bar" />
          </div>
        </section>
      </main>
      <FinalCTA heading="Ready to Talk About Your HVAC Needs?" description="Contact Ferguson & Sons for straightforward residential or commercial HVAC service." />
      <SiteFooter />
    </>
  );
}
