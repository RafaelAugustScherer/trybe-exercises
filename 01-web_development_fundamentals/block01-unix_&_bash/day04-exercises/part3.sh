# 1
jobs

# 2
sleep 30 &

# 3
jobs
kill %PID

# 4
sleep 30
Ctrl + C

# 5
sleep 300 &

# 6
sleep 200
Ctrl + Z

sleep 100
Ctrl + Z

# 7
jobs
fg %PID
Ctrl + Z

# 8
bg %PID

# 9
kill %PID %PID %PID