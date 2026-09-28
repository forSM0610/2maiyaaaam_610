

// মূল নেভিগেশন ফাংশন
function goToStep(targetStep) {
  // ১. সব স্টেপ হাইড করা
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
  });

  // ২. টার্গেট স্টেপ এক্টিভ করা
  const targetElement = document.getElementById(`step${targetStep}`);
  if (targetElement) {
    targetElement.classList.add('active');
  }

  // ৩. Step 2: স্ক্রিন ডার্ক হওয়ার ওভারলে এনিমেশন
  if (targetStep === 2) {
    const darkOverlay = document.getElementById('darkOverlay');
    const step2Content = document.getElementById('step2Content');
    if (darkOverlay && step2Content) {
      darkOverlay.classList.remove('hidden');
      darkOverlay.style.opacity = '1';
      step2Content.classList.add('hidden');

      setTimeout(() => {
        darkOverlay.style.opacity = '0';
        setTimeout(() => {
          darkOverlay.classList.add('hidden');
          step2Content.classList.remove('hidden');
        }, 400);
      }, 600);
    }
  }

  // ৪. Step 3: বার্থডে কার্ড এনিমেশন এবং ৫ সেকেন্ড পর Next বাটন আনহাইড
  if (targetStep === 3) {
    const card = document.getElementById('bdayCard');
    const nextBtn = document.getElementById('step3NextBtn');

    if (card) {
      card.classList.remove('hidden-card');
      card.classList.add('visible-card');
    }

    if (nextBtn) {
      nextBtn.classList.add('hidden');
      setTimeout(() => {
        nextBtn.classList.remove('hidden');
      }, 5000);
    }
  }
// 👇 Step 4: মোর্স কোড পেজের নেক্সট বাটন এনিমেশন
  if (targetStep === 4) {
    const step4Btn = document.getElementById('step4NextBtn');
    if (step4Btn) {
      step4Btn.classList.add('hidden'); // প্রথমে লুকিয়ে রাখবে
      setTimeout(() => {
        step4Btn.classList.remove('hidden'); // ২ সেকেন্ড পর এনিমেশন হয়ে ভেসে উঠবে
      }, 2000); // ২০০০ মিলিসেকেন্ড = ২ সেকেন্ড (প্রয়োজনমতো কমাতে/বাড়াতে পারেন)
    }
  }

// Step 5: অডিও প্লে এবং endingText আনহাইড
if (targetStep === 5) {
  const music = document.getElementById('bgMusic');
  if (music) {
    music.play().catch(e => console.log("Autoplay check:", e));
  }

  const endingText = document.getElementById('endingText');
  if (endingText) {
    endingText.classList.remove('hidden');
  }
}
}