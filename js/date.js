document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.querySelector(".time");
    const dateElement = document.querySelector(".date");

    function formatTime(date) {
        const hours24 = date.getHours();
        const minutes = date.getMinutes();
        return `${hours24.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    }

    function formatDate(date) {
        const DAYS = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
        const MONTHS = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
        return `${DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]}  ${date.getFullYear()}`;
    }

    setInterval(() => {
        const now = new Date();
        timeElement.textContent = formatTime(now);
        dateElement.textContent = formatDate(now);
    }, 200);
});