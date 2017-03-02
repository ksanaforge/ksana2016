@IF EXIST "logs\nginx.pid" (
	mshta javascript:alert^("logs\nginx.pid exists"^);close^(^);
) ELSE (
	@start http://127.0.0.1:2561/yinshun/
	@ECHO Start Accelon 2017
	@ECHO run stop.cmd to stop the server
	@nginx.exe -c nginx.conf
)