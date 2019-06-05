# restart localtunnel if it crashes
function localtunnel {
  lt -s viabdjssdnclkadslclfad --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done