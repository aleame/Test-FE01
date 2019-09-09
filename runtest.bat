@echo off
taskkill /F /IM iexplore.exe
taskkill /F /IM chrome.exe
mvn -Dtest=testRunner test
@echo on