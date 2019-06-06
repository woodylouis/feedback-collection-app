# restart localtunnel if it crashes
function localtunnel {
  lt -s fbieckcds --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done