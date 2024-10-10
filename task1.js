<script>
        // Set the minimum date for the opening date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById("opening-date").setAttribute("min", today);
    </script>
