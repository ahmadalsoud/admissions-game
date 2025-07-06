// Enhanced Knox College Admissions Guide Script
function choose(path) {
  let dialogue = document.getElementById('dialogue');
  
  // Play click sound if available
  try {
    let sound = new Audio('audio/click.wav');
    sound.play().catch(e => {}); // Silently fail if audio not available
  } catch(e) {}
  if (path === 'start') {
    dialogue.innerHTML = `
      <h3>🎓 Starting Your Knox College Application</h3>
      <div class="content-section">
        <h4>Application Requirements:</h4>
        <ul>
          <li><strong>Common Application:</strong> Submit through CommonApp.org</li>
          <li><strong>High School Transcript:</strong> Official transcripts required</li>
          <li><strong>Letters of Recommendation:</strong> 1-2 teacher recommendations</li>
          <li><strong>Personal Essay:</strong> Tell us your story</li>
          <li><strong>Test Scores:</strong> SAT/ACT optional (test-optional policy)</li>
        </ul>
        
        <h4>Application Deadlines:</h4>
        <ul>
          <li><strong>Early Decision:</strong> November 15th</li>
          <li><strong>Early Action:</strong> December 1st</li>
          <li><strong>Regular Decision:</strong> February 1st</li>
        </ul>
        
        <h4>Next Steps:</h4>
        <p>📧 Email: <strong>admissions@knox.edu</strong> with questions</p>
        <p>🌐 Visit: <strong>knox.edu/apply</strong> to start your application</p>
        <p>📞 Call: <strong>(309) 341-7100</strong> for assistance</p>
      </div>
    `;
} else if (path === 'submitted') {
dialogue.innerHTML = `
      <h3>📋 After Submitting Your Application</h3>
      <div class="content-section">
        <h4>What Happens Next:</h4>
        <ul>
          <li><strong>Confirmation Email:</strong> You'll receive confirmation within 24 hours</li>
          <li><strong>Application Portal:</strong> Access your status at knox.edu/portal</li>
          <li><strong>Missing Documents:</strong> We'll email you if anything is missing</li>
          <li><strong>Interview Opportunity:</strong> Optional interviews available</li>
        </ul>
        
        <h4>Timeline:</h4>
        <ul>
          <li><strong>Early Decision:</strong> Decision by December 15th</li>
          <li><strong>Early Action:</strong> Decision by January 15th</li>
          <li><strong>Regular Decision:</strong> Decision by April 1st</li>
        </ul>
        
        <h4>While You Wait:</h4>
        <ul>
          <li>Schedule a campus visit or virtual tour</li>
          <li>Connect with current students</li>
          <li>Explore academic programs and majors</li>
          <li>Research financial aid and scholarships</li>
        </ul>
        
        <p><strong>Stay Connected:</strong> Follow @KnoxCollege on social media for updates!</p>
      </div>
    `;
        dialogue.innerHTML = `
      <h3>🎉 Congratulations! You're Accepted to Knox College!</h3>
      <div class="content-section">
        <h4>Your Next Steps:</h4>
        <ul>
          <li><strong>Enrollment Deposit:</strong> $300 due by May 1st</li>
          <li><strong>Housing Application:</strong> Complete by May 15th</li>
          <li><strong>Course Registration:</strong> During summer orientation</li>
          <li><strong>Financial Aid:</strong> Review your aid package</li>
        </ul>
        
        <h4>Important Dates:</h4>
        <ul>
          <li><strong>Admitted Student Day:</strong> April 15th (virtual/in-person)</li>
          <li><strong>Enrollment Confirmation:</strong> May 1st deadline</li>
          <li><strong>Summer Orientation:</strong> June-August sessions</li>
          <li><strong>Move-in Day:</strong> Late August (dates vary by year)</li>
        </ul>
        
        <h4>Getting Ready:</h4>
        <ul>
          <li>Join the Knox College Class Facebook group</li>
          <li>Complete health and immunization forms</li>
          <li>Apply for on-campus employment</li>
          <li>Explore study abroad opportunities</li>
        </ul>
        
        <h4>Financial Information:</h4>
        <p><strong>Financial Aid Office:</strong> finaid@knox.edu | (309) 341-7149</p>
        <p><strong>Billing Questions:</strong> billing@knox.edu | (309) 341-7140</p>
      </div>
    `;
  } else if (path === 'orientation') {
 dialogue.innerHTML = `
      <h3>🏫 Knox College Orientation Information</h3>
      <div class="content-section">
        <h4>Orientation Sessions:</h4>
        <ul>
          <li><strong>June Session:</strong> Early registration option</li>
          <li><strong>July Sessions:</strong> Multiple dates available</li>
          <li><strong>August Session:</strong> Final session before classes</li>
        </ul>
        
        <h4>What to Expect:</h4>
        <ul>
          <li><strong>Academic Planning:</strong> Meet with your advisor</li>
          <li><strong>Course Registration:</strong> Sign up for fall classes</li>
          <li><strong>Campus Tour:</strong> Explore facilities and resources</li>
          <li><strong>Student Life:</strong> Learn about clubs and activities</li>
          <li><strong>Technology Setup:</strong> Get your Knox accounts activated</li>
        </ul>
        
        <h4>What to Bring:</h4>
        <ul>
          <li>Photo ID and Social Security card</li>
          <li>Transcript and AP/IB scores</li>
          <li>Health insurance information</li>
          <li>Any accommodations documentation</li>
        </ul>
        
        <h4>Parents & Family:</h4>
        <p>Separate parent/family orientation sessions cover:</p>
        <ul>
          <li>Academic expectations and support</li>
          <li>Student life and campus safety</li>
          <li>Financial aid and billing</li>
          <li>Communication policies</li>
        </ul>
        
        <h4>Contact Information:</h4>
        <p><strong>Orientation Team:</strong> orientation@knox.edu | (309) 341-7000</p>
        <p><strong>New Student Programs:</strong> newstudents@knox.edu</p>
      </div>
    `;
  }
}
// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for better UX
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      // Smooth scroll to dialogue after click
      document.getElementById('dialogue').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    });
  });
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    const buttons = document.querySelectorAll('.choices button');
    if (e.key >= '1' && e.key <= '4') {
      const index = parseInt(e.key) - 1;
      if (buttons[index]) {
        buttons[index].click();
      }
    }
  });
});
