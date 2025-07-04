// Dữ liệu bảng chữ cái
const alphabetData = {
  hiragana: {
    name: "Hiragana",
    characters: [
      { character: "あ", phonetic: "a" },
      { character: "い", phonetic: "i" },
      { character: "う", phonetic: "u" },
      { character: "え", phonetic: "e" },
      { character: "お", phonetic: "o" },
      { character: "か", phonetic: "ka" },
      { character: "き", phonetic: "ki" },
      { character: "く", phonetic: "ku" },
      { character: "け", phonetic: "ke" },
      { character: "こ", phonetic: "ko" },
      { character: "さ", phonetic: "sa" },
      { character: "し", phonetic: "shi" },
      { character: "す", phonetic: "su" },
      { character: "せ", phonetic: "se" },
      { character: "そ", phonetic: "so" },
      { character: "た", phonetic: "ta" },
      { character: "ち", phonetic: "chi" },
      { character: "つ", phonetic: "tsu" },
      { character: "て", phonetic: "te" },
      { character: "と", phonetic: "to" },
      { character: "な", phonetic: "na" },
      { character: "に", phonetic: "ni" },
      { character: "ぬ", phonetic: "nu" },
      { character: "ね", phonetic: "ne" },
      { character: "の", phonetic: "no" },
      { character: "は", phonetic: "ha" },
      { character: "ひ", phonetic: "hi" },
      { character: "ふ", phonetic: "fu" },
      { character: "へ", phonetic: "he" },
      { character: "ほ", phonetic: "ho" },
      { character: "ま", phonetic: "ma" },
      { character: "み", phonetic: "mi" },
      { character: "む", phonetic: "mu" },
      { character: "め", phonetic: "me" },
      { character: "も", phonetic: "mo" },
      { character: "や", phonetic: "ya" },
      { character: "ゆ", phonetic: "yu" },
      { character: "よ", phonetic: "yo" },
      { character: "ら", phonetic: "ra" },
      { character: "り", phonetic: "ri" },
      { character: "る", phonetic: "ru" },
      { character: "れ", phonetic: "re" },
      { character: "ろ", phonetic: "ro" },
      { character: "わ", phonetic: "wa" },
      { character: "を", phonetic: "wo" },
      { character: "ん", phonetic: "n" },
    ],
  },
  katakana: {
    name: "Katakana",
    characters: [
      { character: "ア", phonetic: "a" },
      { character: "イ", phonetic: "i" },
      { character: "ウ", phonetic: "u" },
      { character: "エ", phonetic: "e" },
      { character: "オ", phonetic: "o" },
      { character: "カ", phonetic: "ka" },
      { character: "キ", phonetic: "ki" },
      { character: "ク", phonetic: "ku" },
      { character: "ケ", phonetic: "ke" },
      { character: "コ", phonetic: "ko" },
      { character: "サ", phonetic: "sa" },
      { character: "シ", phonetic: "shi" },
      { character: "ス", phonetic: "su" },
      { character: "セ", phonetic: "se" },
      { character: "ソ", phonetic: "so" },
      { character: "タ", phonetic: "ta" },
      { character: "チ", phonetic: "chi" },
      { character: "ツ", phonetic: "tsu" },
      { character: "テ", phonetic: "te" },
      { character: "ト", phonetic: "to" },
      { character: "ナ", phonetic: "na" },
      { character: "ニ", phonetic: "ni" },
      { character: "ヌ", phonetic: "nu" },
      { character: "ネ", phonetic: "ne" },
      { character: "ノ", phonetic: "no" },
      { character: "ハ", phonetic: "ha" },
      { character: "ヒ", phonetic: "hi" },
      { character: "フ", phonetic: "fu" },
      { character: "ヘ", phonetic: "he" },
      { character: "ホ", phonetic: "ho" },
      { character: "マ", phonetic: "ma" },
      { character: "ミ", phonetic: "mi" },
      { character: "ム", phonetic: "mu" },
      { character: "メ", phonetic: "me" },
      { character: "モ", phonetic: "mo" },
      { character: "ヤ", phonetic: "ya" },
      { character: "ユ", phonetic: "yu" },
      { character: "ヨ", phonetic: "yo" },
      { character: "ラ", phonetic: "ra" },
      { character: "リ", phonetic: "ri" },
      { character: "ル", phonetic: "ru" },
      { character: "レ", phonetic: "re" },
      { character: "ロ", phonetic: "ro" },
      { character: "ワ", phonetic: "wa" },
      { character: "ヲ", phonetic: "wo" },
      { character: "ン", phonetic: "n" },
    ],
  },
  kanji: {
    name: "Kanji",
    characters: [
      { character: "一", phonetic: "ichi", meaning: "một" },
      { character: "二", phonetic: "ni", meaning: "hai" },
      { character: "三", phonetic: "san", meaning: "ba" },
      { character: "四", phonetic: "yon", meaning: "bốn" },
      { character: "五", phonetic: "go", meaning: "năm" },
      { character: "六", phonetic: "roku", meaning: "sáu" },
      { character: "七", phonetic: "nana", meaning: "bảy" },
      { character: "八", phonetic: "hachi", meaning: "tám" },
      { character: "九", phonetic: "kyuu", meaning: "chín" },
      { character: "十", phonetic: "juu", meaning: "mười" },
      { character: "人", phonetic: "jin", meaning: "người" },
      { character: "大", phonetic: "dai", meaning: "lớn" },
      { character: "小", phonetic: "shou", meaning: "nhỏ" },
      { character: "山", phonetic: "yama", meaning: "núi" },
      { character: "川", phonetic: "kawa", meaning: "sông" },
      { character: "日", phonetic: "hi", meaning: "mặt trời" },
      { character: "月", phonetic: "tsuki", meaning: "mặt trăng" },
      { character: "火", phonetic: "hi", meaning: "lửa" },
      { character: "水", phonetic: "mizu", meaning: "nước" },
      { character: "木", phonetic: "ki", meaning: "cây" },
      { character: "金", phonetic: "kane", meaning: "tiền" },
      { character: "土", phonetic: "tsuchi", meaning: "đất" },
      { character: "上", phonetic: "ue", meaning: "trên" },
      { character: "下", phonetic: "shita", meaning: "dưới" },
      { character: "中", phonetic: "naka", meaning: "giữa" },
      { character: "左", phonetic: "hidari", meaning: "trái" },
      { character: "右", phonetic: "migi", meaning: "phải" },
      { character: "前", phonetic: "mae", meaning: "trước" },
      { character: "後", phonetic: "ato", meaning: "sau" },
      { character: "年", phonetic: "toshi", meaning: "năm" },
      { character: "月", phonetic: "gatsu", meaning: "tháng" },
      { character: "日", phonetic: "nichi", meaning: "ngày" },
      { character: "時", phonetic: "toki", meaning: "thời gian" },
      { character: "分", phonetic: "fun", meaning: "phút" },
      { character: "今", phonetic: "ima", meaning: "bây giờ" },
      { character: "今", phonetic: "kon", meaning: "nay" },
    ],
  },
};

// Biến toàn cục
let currentAlphabet = null;
let currentQuestion = null;
let score = 0;
let totalQuestions = 0;
let usedQuestions = new Set();
let isMusicPlaying = false;

// DOM Elements
const alphabetSelection = document.getElementById("alphabet-selection");
const quizScreen = document.getElementById("quiz-screen");
const backBtn = document.getElementById("back-btn");
const currentAlphabetName = document.getElementById("current-alphabet-name");
const phoneticText = document.getElementById("phonetic-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const feedbackText = document.getElementById("feedback-text");
const currentScore = document.getElementById("current-score");
const totalQuestionsSpan = document.getElementById("total-questions");

// Audio Elements
const backgroundMusic = document.getElementById("backgroundMusic");
const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");
const musicToggle = document.getElementById("musicToggle");
const volumeSlider = document.getElementById("volumeSlider");

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Thêm event listener cho các card bảng chữ cái
  const alphabetCards = document.querySelectorAll(".alphabet-card");
  alphabetCards.forEach((card) => {
    card.addEventListener("click", function () {
      const alphabetType = this.getAttribute("data-alphabet");
      startQuiz(alphabetType);
    });
  });

  // Event listener cho nút quay lại
  backBtn.addEventListener("click", function () {
    showAlphabetSelection();
  });

  // Music controls
  musicToggle.addEventListener("click", toggleMusic);
  volumeSlider.addEventListener("input", updateVolume);

  // Khởi tạo âm nhạc
  initializeMusic();
});

// Khởi tạo âm nhạc
function initializeMusic() {
  // Set volume ban đầu
  backgroundMusic.volume = 0.3;
  correctSound.volume = 0.5;
  incorrectSound.volume = 0.5;

  // Trạng thái ban đầu là tắt
  isMusicPlaying = false;
  musicToggle.classList.add("muted");

  // Không tự động phát nhạc
  backgroundMusic.pause();
}

// Toggle âm nhạc
function toggleMusic() {
  if (isMusicPlaying) {
    backgroundMusic.pause();
    musicToggle.classList.add("muted");
    musicToggle.classList.remove("playing");
    isMusicPlaying = false;
  } else {
    backgroundMusic.play();
    musicToggle.classList.remove("muted");
    musicToggle.classList.add("playing");
    isMusicPlaying = true;
  }
}

// Cập nhật âm lượng
function updateVolume() {
  const volume = volumeSlider.value / 100;
  backgroundMusic.volume = volume;
  correctSound.volume = volume;
  incorrectSound.volume = volume;
}

// Phát âm thanh đúng
function playCorrectSound() {
  correctSound.currentTime = 0;
  correctSound.play().catch((error) => {
    console.log("Không thể phát âm thanh:", error);
  });
}

// Phát âm thanh sai
function playIncorrectSound() {
  incorrectSound.currentTime = 0;
  incorrectSound.play().catch((error) => {
    console.log("Không thể phát âm thanh:", error);
  });
}

// Chuyển sang màn hình quiz
function startQuiz(alphabetType) {
  currentAlphabet = alphabetType;
  currentAlphabetName.textContent = alphabetData[alphabetType].name;
  score = 0;
  totalQuestions = 0;
  usedQuestions.clear();

  updateScore();
  generateNewQuestion();

  // Chuyển màn hình với hiệu ứng
  alphabetSelection.classList.remove("active");
  setTimeout(() => {
    quizScreen.classList.add("active");
  }, 300);
}

// Quay lại màn hình chọn bảng chữ cái
function showAlphabetSelection() {
  quizScreen.classList.remove("active");
  setTimeout(() => {
    alphabetSelection.classList.add("active");
  }, 300);
}

// Tạo câu hỏi mới
function generateNewQuestion() {
  const characters = alphabetData[currentAlphabet].characters;

  // Chọn ngẫu nhiên một ký tự chưa được sử dụng
  let availableCharacters = characters.filter(
    (char) => !usedQuestions.has(char.character)
  );

  // Nếu đã sử dụng hết, reset lại
  if (availableCharacters.length === 0) {
    usedQuestions.clear();
    availableCharacters = characters;
  }

  const correctChar =
    availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
  usedQuestions.add(correctChar.character);

  currentQuestion = correctChar;
  totalQuestions++;

  // Hiển thị phiên âm
  phoneticText.textContent = correctChar.phonetic;

  // Tạo các option
  generateOptions(correctChar, characters);

  // Ẩn feedback
  feedback.classList.remove("show", "correct", "incorrect");

  updateScore();
}

// Tạo các option cho câu hỏi
function generateOptions(correctChar, allCharacters) {
  const options = [correctChar];

  // Thêm 9 option sai ngẫu nhiên
  const otherCharacters = allCharacters.filter(
    (char) => char.character !== correctChar.character
  );
  const shuffledOthers = otherCharacters.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 9 && i < shuffledOthers.length; i++) {
    options.push(shuffledOthers[i]);
  }

  // Xáo trộn thứ tự các option
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  // Tạo HTML cho các option
  optionsContainer.innerHTML = "";
  shuffledOptions.forEach((option, index) => {
    const optionBtn = document.createElement("button");
    optionBtn.className = "option-btn";
    optionBtn.textContent = option.character;
    optionBtn.addEventListener("click", () => checkAnswer(option, correctChar));
    optionsContainer.appendChild(optionBtn);
  });
}

// Kiểm tra đáp án
function checkAnswer(selectedChar, correctChar) {
  const optionBtns = document.querySelectorAll(".option-btn");

  // Vô hiệu hóa tất cả các nút
  optionBtns.forEach((btn) => btn.classList.add("disabled"));

  if (selectedChar.character === correctChar.character) {
    // Đáp án đúng
    score++;
    showFeedback("Chính xác! 🎉", "correct");
    playCorrectSound();

    // Tìm và highlight nút đúng
    optionBtns.forEach((btn) => {
      if (btn.textContent === correctChar.character) {
        btn.classList.add("correct");
      }
    });
  } else {
    // Đáp án sai
    showFeedback(
      `Sai rồi! Đáp án đúng là: ${correctChar.character}`,
      "incorrect"
    );
    playIncorrectSound();

    // Highlight nút sai và nút đúng
    optionBtns.forEach((btn) => {
      if (btn.textContent === selectedChar.character) {
        btn.classList.add("incorrect");
      } else if (btn.textContent === correctChar.character) {
        btn.classList.add("correct");
      }
    });
  }

  updateScore();

  // Tạo câu hỏi mới sau 2 giây
  setTimeout(() => {
    generateNewQuestion();
  }, 2000);
}

// Hiển thị feedback
function showFeedback(message, type) {
  feedbackText.textContent = message;
  feedback.classList.add("show", type);
}

// Cập nhật điểm số
function updateScore() {
  currentScore.textContent = score;
  totalQuestionsSpan.textContent = totalQuestions;
}

// Thêm hiệu ứng hover cho các card
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".alphabet-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
});
